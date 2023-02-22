import getMenu from '../utils/getMenu.js';
import { Router } from "express";
import titles from "../../titles.json" assert { type: "json" };

const router = Router();

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

