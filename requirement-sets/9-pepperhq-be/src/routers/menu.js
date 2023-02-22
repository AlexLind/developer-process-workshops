
import { Router } from "express";
import titles from "../../titles.json" assert { type: "json" };

const router = Router();

async function getMenu() {
    const response = await fetch('http://backend-challenge-pos.pepperhq.com/menu.json');
    const data = await response.json();
    return data.categories;
}

router.get("/", async (req, res) => {
    const menu = await getMenu();
    console.log(titles, menu)
    res.send(menu);
});

export default router;

