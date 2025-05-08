function redirectToCreateProduct(e){

    const url= new URL(window.location);
    url.pathname = "/admin/products/create.htlm";
    window.location.href = url.toString();
}