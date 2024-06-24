let optionsButtons= document.querySelectorAll(".option-button");
let advancedOptionButton=document.querySelectorAll(".adv-option-button");
let fontName=document.getElementById("fontName");
let fontSizeRef=document.getElementById("fontSize");
let writingArea=document.getElementById("text-input");
let linkButton=document.getElementById("createLink");
let alignButtons=document.querySelectorAll(".align");
let spacingButtons=document.querySelectorAll(".spacing");
let formatButtons=document.querySelectorAll(".format");
let scriptButtons=document.querySelectorAll(".script");

// List of font list
let fontList=["Arial","Verdana","Times New Roman","Garamond","Georgia","Courier New","curvive"];
// InitiLIZE sETTING
const initializer=()=>{
    // function calls for highlighting buttons
    // No HighLights for link,unlink,lists,undo,redo since they are one time operations
    highlighter(alignButtons,true);
    highlighter(spacingButtons,true);
    highlighter(formatButtons,false);
    highlighter(scriptButtons,true); 
    // create options for font names
    fontList.map(value=>{
        let option=document.createElement("option");
        option.value=value;
        option.innerHTML=value;
        fontName.appendChild(option);
    });
    // Fonst size allows till 7
    for(let i=1;i<=20;i++){
        let option=document.createElement("option");
        option.value=i;
        option.innerHTML=i;
        fontSizeRef.appendChild(option);
    }
    // Default Size
    fontSizeRef.value=3;
};
// MAIN LOGIC
const modifyText=(command,defaultUi,value)=>{
    // execCommand executes command on selsected text
    document.execCommand(command,defaultUi,value);
};
// For basic operations which dont need value parameter
optionsButtons.forEach(button =>{
    button.addEventListener("click",()=>{
        modifyText(button.id,false,null);

    });
});
// link
linkButton.addEventListener("click",()=>{
    let userLink=prompt("Enter a URL");
    // if link has http then pass directly else add https
    if(/http/i.test(userLink)){
        modifyText(linkButton.id,false,userLink);
    }
    else{
        userLink="http://"+userLink;
        modifyText(linkButton.id,false,userLink);
    }
});
// options that require value parameter(eg:colors,fonts)
advancedOptionButton.forEach((button)=>{
    button.addEventListener("change",()=>{
        modifyText(button.id,false,button.value);
    });
});
// Highlight clicked buttons
const highlighter=(className,needsRemoval)=>{
    className.forEach((button)=>{
        button.addEventListener("click", ()=>{
            // needsRemoval=true means only one button should be highlighted and other would be normal
            if(needsRemoval){
                let alreadyActive=false;

                // Ifg currently clicked button is already active
                if(button.classList.contains("active")){
                    alreadyActive=true;
                }
                // Remove Highlight from other buttons
                highlighterRemover(className);
                if(!alreadyActive){
                    // highlight click button
                    button.classList.add("active");
                }
            }
            else{
                // if other buttons can be highlighted
                button.classList.toggle("active");
            }
        });
    });
};
const highlighterRemover=(className)=>{
    className.forEach((button)=>{
        button.classList.remove("active");

    });
};
window.onload=initializer();