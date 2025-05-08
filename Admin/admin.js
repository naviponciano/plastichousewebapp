function createAdminMenu(){
    const ProductRoute = "./admin/Products/index.html";
    const cateoryRoute = "./admin/Categorias/index.html";
    const isRouteActive = (route) =>{
        const currenRoute = window.location.pathname;
        return route === currenRoute;
    }
    const routes = [
        {
            name: "Products",
            path: ProductRoute, 
            isActive: isRouteActive(ProductRoute)
        },
        {
            name:"Categorias",
            path:cateoryRoute, 
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