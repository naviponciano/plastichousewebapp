function verifyUserSession(){
    const token = localStorage.getItem('authtoken') ?? '';
    if (!token) {
        const url = `${window.location.origin}/auth/login.html`;
        window.location.href = url;
    }
}

verifyUserSession();