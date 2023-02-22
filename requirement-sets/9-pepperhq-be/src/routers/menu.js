
import { Router } from "express";
import titles from "../../titles.json" assert { type: "json" };

const router = Router();

async function getMenu() { // Fetches menu from http://backend-challenge-pos.pepperhq.com/menu.json and returns it
    const response = await fetch('http://backend-challenge-pos.pepperhq.com/menu.json');
    const data = await response.json();
    return data.categories;
}

// Create a 24 hour cache for the menu


router.get("/", async (req, res) => {
    const menu = await getMenu();
    console.log(titles, menu)
    // Map through menu and look at each product.id and see if it matches any of the titles.id, if it does add the title to the product
    menu.map((category) => {
        category.products.map((product) => {
            titles.map((title) => {
                if (product.id === title.id) {
                    product.title = title.title;
                }
            })
        })
    })
    console.log(menu)

    res.status(200).send(menu);
});

export default router;

