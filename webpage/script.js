const displayBox=document.querySelector("#displayBox");
const bitCodeBox=document.querySelector("#bitCodeBox");
bitCodeBox.value="";
let BitCode="";


function handlePixelClick(e)
{
    if(e.target.classList.contains("pixel"))
    {
        e.target.classList.remove("pixel")
    }
    else
    {
         e.target.classList.add("pixel")
    }
    e.target.classList.toggle("active");
    generatePixelBitCode();
}

function createDisplayBoxElements()
{
for(let row=0;row<8;row++)
{
    const rowElement=document.createElement("div");
    rowElement.classList.add("rows");
    for(let column=0;column<8;column++)
    {
        const columnElement=document.createElement("div");
        columnElement.classList.add("pixel");
        columnElement.classList.add(`row${row}col${column}`);
            columnElement.addEventListener("click",handlePixelClick);
        rowElement.appendChild(columnElement);
    }
    displayBox.appendChild(rowElement);
}
}
createDisplayBoxElements();


function generatePixelBitCode()
{
    BitCode="const byte customSymbol[8]={B";
    for(let row=0;row<8;row++)
    {
        for(let column=0;column<8;column++)
            {
                const pixel=document.querySelector(`.row${row}col${column}`);
                if(pixel.classList.contains("active"))
                    BitCode+="1";
                else
                    BitCode+="0";
            }
            if(row!=7)
            BitCode+=",B";
            else
            BitCode+="};"
    }
bitCodeBox.value=BitCode;
}