import fs from 'fs';
const sidebarRaw = fs.readFileSync('./src/router/sidebar.json');
let sidebar = JSON.parse(sidebarRaw);

const default_layout = "~/layout/Admin.vue"
const default_component = "~/pages/dashboard/index.vue"

console.log('Generate Sidebar Route')

const createName = name => {
    let slug;
    slug = name.toLowerCase();
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    slug = slug.replace(/ /gi, "-");
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    return slug;
};

let sidebarNew = [];

sidebar.forEach(item => {
    if(item.type == 'level-one'){
        let newItem = {
            path: item.path,
            component: `?() => import('${item.component ? item.component : default_layout}')?`,
            children: []
        }

        let first_child = []
        item.children.forEach(child => {
            
            if(child.type == 'level-two'){
                let newChild = {
                    path: child.path.split('/')[2],
                    name: `${createName(item.name)}-${createName(child.name)}`,
                    component: `?() => import('${child.component ? child.component : default_component}')?`
                }
                first_child.push(newChild)
            }

            if(child.type == 'level-three'){
                let second_child = []
                child.children.forEach(grandChild => {
                    let url = grandChild.path.split('/')
                    let newGrandChild = {
                        path: `${url[2]}/${url[3]}`,
                        name: `${createName(item.name)}-${createName(child.name)}-${createName(grandChild.name)}`,
                        component: `?() => import('${grandChild.component ? grandChild.component : default_component}')?`,
                    }
                    second_child.push(newGrandChild)
                })

                first_child.push(...second_child)
            }  
        })
        newItem.children.push(...first_child)

        sidebarNew.push(newItem);
    }
})

let stringSidebar = JSON.stringify(sidebarNew, null, 2).replaceAll('"?', '').replaceAll('?"','');
fs.writeFileSync('./src/router/sidebar-router.js', `const sidebar_route = ${stringSidebar}\nexport {sidebar_route} `);
console.log('Generate sidebar-router.js success');
console.log(`Open ./sidebar-router.js to see the result & change the "${default_layout}" & "${default_component}"`);
console.log('----------------------------------------------------------------------------------------------------------------------');