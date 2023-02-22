export default async function getMenu() {
    // Fetches menu from http://backend-challenge-pos.pepperhq.com/menu.json and returns it
    const response = await fetch('http://backend-challenge-pos.pepperhq.com/menu.json');
    const data = await response.json();
    return data.menu;
}