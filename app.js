
const createHtml = (tag,attrs,inner)=>{
    const element = document.createElement(tag);
    attrs.map(attrs =>{element.setAttribute(attrs.name,attrs.value.join(" "))});
    inner?element.innerHTML = inner : null;
    return element
};

const columns =['Id','Full name','Position','Tech','Exp','Sex','Salary'];
const table =createHtml("table",[{name:'class',value:["table"]}],null);
const tr = createHtml("tr",[],null);
columns.map(el => {tr.appendChild(createHtml("th",[],el))});
const thead = createHtml("thead",[],null);
thead.appendChild(tr);

const container = createHtml("div",[{name:'class',value:["main-container"]}],null);
const row = createHtml("div",[{name:'class',value:["main-row"]}],null);
const col = createHtml("div",[{name:'class',value:["main-col"]}],null);
const h1 = createHtml("div",[{name:'class',value:["main-h1"]}],"Test sistem Apppendeddd");




const stuff = [
    {id:1,fullName:'Vasiliy Petrovich',Position:'web dev',Tech:'Js',Exp:'3',Sex:'Male',Salary:"2500"},
    {id:2,fullName:'John Jay Rembo',Position:'Dev',Tech:'Phyton',Exp:'2',Sex:'Male',Salary:"3200"},
    {id:3,fullName:'Dutch',Position:'Analitic',Tech:'Seo',Exp:'3',Sex:'Male',Salary:"3200"},
    {id:4,fullName:'Margarita Sidorova',Position:'Dev',Tech:'PHP',Exp:'2',Sex:'Female',Salary:"2500"},
    {id:5,fullName:'Katerina Petrova',Position:'Dev',Tech:'Js',Exp:'5',Sex:'Female',Salary:"4100"},
    {id:6,fullName:'Sidor Pidor',Position:'Analitic',Tech:'Seo',Exp:'1',Sex:'Male',Salary:"1200"},
    {id:7,fullName:'VIvan Ivanovich',Position:'Dev',Tech:'Js',Exp:'2',Sex:'Male',Salary:"1500"},
    {id:8,fullName:'Kristyna Jopina',Position:'Dev',Tech:'Phyton',Exp:'3',Sex:'Female',Salary:"2000"},
    {id:9,fullName:'aaaaa aaaaa',Position:'dev',Tech:'Js',Exp:'5',Sex:'Male',Salary:"5000"},
    {id:10,fullName:'Artyom V',Position:'Dev',Tech:'Js',Exp:'4',Sex:'Male',Salary:"5000"},
];

const tbody = createHtml("tbody",[],null);
stuff.map(el =>{
    const trTbody = createHtml("tr",[],null);
    Object.keys(el).map(elemen=>{
        trTbody.appendChild(createHtml("td",[],el[elemen]))
    });
    tbody.appendChild(trTbody);
});
const insertExtraRow = (el,i,arr,rowName,rowValue) =>{
    if (arr.length-1 === i){
        return rowValue
    }else if (arr.length-2 === i){
        return rowName
    }
    return null
};

const  trTotal = createHtml("tr",[],null);
columns.map((el,i,arr) => {
    trTotal.appendChild(createHtml("td",[],insertExtraRow(el,i,arr,'Total',555)));

});
const  trAvg = createHtml("tr",[],null);
columns.map((el,i,arr) => {
    trAvg.appendChild(createHtml("td", [], insertExtraRow(el, i, arr,'Avg',7777)));
});
tbody.appendChild(trTotal);
tbody.appendChild(trAvg);
col.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

col.appendChild(h1);
row.appendChild(col);
container.appendChild(row);
document.getElementById('app').appendChild(container);


// const container = document.createElement('div');
// container.setAttribute("class","main-container");
// const row = document.createElement('div');
// row.setAttribute("class","main-row");
// const col = document.createElement("div");
// col.setAttribute("class","main-col");
// const  h1 = document.createElement("H1");
// h1.setAttribute("class","main-h1");
// h1.innerHTML = "lesson test";