var contextMenus = {}
contextMenus.create_password = chrome.contextMenus.create(
    {"title":"Generate Password", "contexts":["editable"]}, 
    function (){
        if (chrome.runtime.lasterror){
            console.error(chrome.runtime.lasterror.message)
        }
    }
)
chrome.contextMenus.onClicked.addListener(contextMenuHandler)

function contextMenuHandler(info, tab){
    if (info.menuItemId == contextMenus.create_password){
        chrome.tabs.executeScript({
            file: "passwort.js"
        })
    }
}
