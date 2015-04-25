/***************************************************************************
 *   Copyright (C) 2006, Paul Lutus                                        *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.             *
 ***************************************************************************/

addEvent(window,"load",read_values);
addEvent(window,"unload",write_cookie);

// Utility function to add an event listener
function addEvent(o,e,f) {
  if (o.addEventListener){
    o.addEventListener(e,f,false);
    return true;
  }
  else if (o.attachEvent){
    return o.attachEvent("on"+e,f);
  }
  else {
    return false;
  }
}

function get_cookie(path)
{
  var result = "";
  var a = document.cookie.indexOf(path);
  if(a != -1) {
    a += path.length + 1;
    var b = document.cookie.indexOf(";",a);
    if(b == -1) {
      b = document.cookie.length;
    }
    var result = unescape(document.cookie.substring(a,b));
  }
  return result;
}

var funct_array = new Array("pv","fv","np","pmt","ir");
var completed = false;

function read_cookie() {
  var cookie = get_cookie(window.location.pathname);
  if(cookie != '') {
    var array = cookie.split("|");
    for(var i = 0;i < array.length;i++) {
      var s = "document.calculator." + array[i];
      eval(s);
    }
  }
}

function read_com_args() {
  var hash = new Object();
  // preset undefined values
  for (var i in funct_array) {
    hash[funct_array[i]] = false;
  }
  var temp = window.location.search.split("?");
  if(temp.length > 1) {
    var array = temp[1].split("&");
    var n = 0;
    for (var i in array) {
      var arg = unescape(array[i]);
      var pair = arg.split("=");
      if(pair[0] in hash) {
        // set value defined
        hash[pair[0]] = true;
        var value = pair[1].replace(",","");
        var s = "document.calculator." + pair[0] + ".value = " + value;
        eval(s);
        n++;
      }
      // special case: pb (payment at beginning)
      else if(pair[0] == "pb") {
        var pb = (pair[1] == "true")?0:1;
        var s = "document.calculator.pb[" + pb + "].checked = true";
        eval(s);
      }
    }
    // if four values are defined,
    // compute the fifth
    if(n == 4) { 
      for(var str in hash) {
        // is this value undefined?
        if(!hash[str]) {
          // compute it
          comp(document.calculator,str);
        }
      }
    }
  }
}

function read_values() {
  read_cookie();
  set_status(false);
  read_com_args();
}

function write_cookie() {
  var cookie = new Array();
  for(i = 0;i < funct_array.length;i++) {
    var v = funct_array[i];
    cookie[i] = v + ".value=\"" + eval("document.calculator." + v + ".value") + "\"";
  }
  pb = document.calculator.pb[0].checked?0:1;
  cookie[funct_array.length] = "pb[" + pb + "].checked = true";
  cookie = escape(cookie.join("|"));
  var duration = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
  document.cookie=window.location.pathname+"="+cookie+"; expires=" + duration.toGMTString();
}

function value_changed(source) {
  var col = (source.value.match(/^\s*-/))?"red":"black";
  source.style.color = col;
  set_status(false);
}

// Calculator functions

function set_status(val) {
  completed = val;
  var s = "";
  if(completed) {
    s = "<span style=\"color:green\">Computation complete.</span>";
  }
  else {
    s = "<span style=\"color:red\">Computation incomplete. Press a button or enter more values.</span>";
  }
  document.getElementById("status").innerHTML = "<center>" + s + "</center>";
}

function num_format(v,places,dest,delim,radix) { // format numbers with "places" digits
  var x = Math.abs(v);
  var m = Math.pow(10,places);
  var x = Math.floor(x * m + .5);
  var i = places;
  var n = 16;
  var sx = "";
  while(n-- > 0 && (((i--) >= 0) || (x > 0))) {
    if(i < -1) {
      sx = (((i+1) % 3 == 0)?delim:"") + sx;
    }
    sx = (x % 10) + sx;
    x = Math.floor(x / 10);
    if(i == 0) {
      sx = radix + sx;
    }
  }
  if(v < 0) {
    sx = "-" + sx;
  }
  dest.value = sx;
  set_cell_color(dest,v);
}

function set_cell_color(cell,v) {
  cell.style.color = (v < 0)?"red":"black";
}

function parse_cell(cell,delim) {
  var v = cell.value.replace(new RegExp(delim,'g'),"");
  var y = parseFloat(v);
  set_cell_color(cell,y);
  return y;
}

function comp(form,com) { // general entry point for all cases
  completed = false;
  var x=2/3;
  var strx=x.toString();
  // discover locale
  var loc_us = (strx.indexOf(".") >= 0);
  var delim = (loc_us)?",":".";
  var radix = (loc_us)?".":",";
  // set display decimal places
  var dec_places = 2;
  // get payment type
  // beginning = 1
  // end = 0
  var pb = form.pb[0].checked?1:0;
  // convert all entry fields into variables
  var pv = parse_cell(form.pv,delim);
  var fv = parse_cell(form.fv,delim);
  var np = parse_cell(form.np,delim);
  var pmt = parse_cell(form.pmt,delim);
  if(form.ir.value == "") {
    form.ir.value = "1";
  }
  var ir = parse_cell(form.ir,delim);
  // we're expressing the rate as a percentage, so
  ir /= 100.0;
  // test and compute all cases
  switch(com) {
    case 'pv':
      pv = comp_pv(np,ir,pmt,fv,pb);
    completed = true;
    break;
    case 'pt':
    case 'fv':
      fv = comp_fv(np, ir, pmt, pv,pb);
    completed = true;
    break;
    case 'np':
      np = comp_np(ir,pmt,fv,pv,pb);
    completed = true;
    break;
    case 'pmt':
      pmt = comp_pmt(np,ir,fv,pv,pb);
    completed = true;
    break;
    case 'ir':
      ir = comp_ir(np,ir,pmt,pv,fv,pb);
    completed = true;
    break;
    case 'loc':
      break;
  }
  num_format(pv,dec_places,form.pv,delim,radix);
  num_format(fv,dec_places,form.fv,delim,radix);
  num_format(np,dec_places,form.np,delim,radix);
  num_format(pmt,dec_places,form.pmt,delim,radix);
  num_format(ir * 100.0,6,form.ir,delim,radix);
  set_status(completed);
  return true;
} // function comp

function comp_pv(np,ir,pmt,fv,pb)
{
  var pv;
  if(ir == 0.0) {
    pv = - fv - np * pmt;
  }
  else {
    var qa = Math.pow(1 + ir,-np);
    var qb = Math.pow(1 + ir,np);
    pv = - qa * (fv + ((-1 + qb) * pmt * (1 + ir * pb))/ir);
  }
  return pv;
}

function comp_fv(np, ir, pmt, pv,pb)
{
  var fv;
  if(ir == 0.0) {
    fv = - np * pmt - pv;
  }
  else {
    var q = Math.pow(1+ir,np);
    fv = - q * pv - (((-1 + q) * pmt * (1 + ir * pb))/ir);
  }
  return fv;
}

function comp_pmt( np,  ir, fv,  pv,pb)
{
  var pmt = 0;
  if(ir == 0.0) {
    if(np != 0.0) {
      pmt = - (fv + pv)/np;
    }
  }
  else {
    var q = Math.pow(1+ir,np);
    pmt = - (ir * (fv + (q * pv)))/((-1 + q) * (1 + ir * pb));
  }
  return pmt;
}

function comp_np( ir,  pmt,  fv,  pv,pb)
{
  var np = 0;
  if(ir == 0.0) {
    if(pmt != 0.0) {
      np = - (fv + pv)/pmt;
    }
  }
  else { // ir != 0
    var terma = -fv * ir + pmt + ir * pmt * pb;
    var termb = pmt + ir * pv + ir * pmt * pb;
    np = Math.log(terma/termb)/Math.log(1 + ir);
  }
  return np;
}

function comp_ir(np,ir,pmt,pv,fv,pb)
{
  var tir = ir; // default value
  var maxtries = 400;
  var val = 0;
  var oldval = 0;
  var delta = 0;
  var olddelta = 0;
  if((fv == 0.0) && (pv == 0.0)) {
    tir = (pmt < 0)?-1.0:1.0;
  }
  else {
    var k = 0;
    var solved = false;
    do {
      var i = 0;
      var j = 0;
      var guess = (k == 0)?ir:-ir;
      var gd = guess * .5;
      if(gd == 0.0)
        gd = 1.0;
      do {
        guess += gd;
        if(guess != 0.0) {
          val = comp_fv(np,guess,pmt,pv,pb);
          delta = Math.abs(val-fv);
        }
        if(i > 0) { // old values not set on i == 0
          j++;
          //test match of absolute values and rate of change
          if((Math.abs(val-oldval) > 1e-8) || (delta > 1e-8)) {
            j = 0;
          }
          if(delta > olddelta) {
            gd *= -.5;
          }
        }
        oldval = val;
        olddelta = delta;
      }
      while((i++ < maxtries) && (j < 3));
      if(i < maxtries) {
        tir = guess;
        solved = true;
      }
    }
    while((k++ < 2) && !solved);
    if(!solved) {
      alert("Cannot compute interest for these values.");
    }
  }
  return tir;
}