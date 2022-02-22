// for(let i=0;i<9;i++)
// {
// if(i==5)
// {
//     continue;
// }
// document.write(`<br>${i} `);
// }


outer:for(let i=0;i<5;i++)
{
document.write("Count<br>");
for(let j=1;j<3;j++)
{
    if(i==2)
    {
        break outer;
    }
    alert("back out");

}
}