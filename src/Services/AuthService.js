

export function getUser(){
    return JSON.parse(localStorage.getItem('User'));
}

export function Login(userName, password){
    localStorage.setItem('User', JSON.stringify({ userName, password }));
}















