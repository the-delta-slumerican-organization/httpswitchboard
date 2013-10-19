/*******************************************************************************

    httpswitchboard - a Chromium browser extension to black/white list requests.
    Copyright (C) 2013  Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/httpswitchboard
*/

$(function(){

/******************************************************************************/

var background = chrome.extension.getBackgroundPage();
var httpsb = background.HTTPSB;

/******************************************************************************/

$('#delete-blacklisted-cookies').attr('checked', httpsb.userSettings.deleteCookies);
$('#delete-blacklisted-localstorages').attr('checked', httpsb.userSettings.deleteLocalStorages);
$('#cookie-removed-counter').html(httpsb.cookieRemovedCounter);

/******************************************************************************/

// Handle user interaction

$('#delete-blacklisted-cookies').change(function(){
    chrome.runtime.sendMessage({
        what: 'userSettings',
        name: 'deleteCookies',
        value: $(this).is(':checked')
    });
});

$('#delete-blacklisted-localstorages').change(function(){
    chrome.runtime.sendMessage({
        what: 'userSettings',
        name: 'deleteLocalStorages',
        value: $(this).is(':checked')
    });
});


/******************************************************************************/

});
