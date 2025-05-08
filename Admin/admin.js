function createAdminMenu(){
    const ProductRoute = "Products";
    const cateoryRoute = "Categorias";

    const isRouteActive = (routeName) =>{
        const availableRoutes = {
            Products: [
                "/admin/Products/index.html",
                "/admin/Products/create.html",
                "/admin/Products/edit.html"
            ],
            Categorias: [
                ,
                "/admin/Categorias/create.html",
                "/admin/Categorias/edit.html"
            ]
        };
        const currenRoute = window.location.pathname;
        //return route === currenRoute;
        return availableRoutes[routeName].includes(currenRoute)
    };


    const routes = [
        {
            name: "Products",
            path: "/admin/Products/index.html", 
            isActive: isRouteActive(ProductRoute)
        },
        {
            name:"Categorias",
            path:"/admin/Categorias/index.html", 
            isActive: isRouteActive(cateoryRoute),
        },
    ];

    const container = document.getElementById("admin-sidebar-menu");
    for (const route of routes){
        const li = document.createElement("li");
        li.innerHTML =`<a class ="${route.isActive ?"active":""}" href="${route.path}">
        ${route.name}
        </a>`;

        container.appendChild(li);
    }
}