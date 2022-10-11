export async function getUsersData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}