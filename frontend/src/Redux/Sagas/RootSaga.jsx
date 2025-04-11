import { all } from "redux-saga/effects";
import maincategorysaga from "./MaincategorySagas";
import subcategorysaga from "./SubcategorySagas";
import brandsaga from "./BrandSagas";
import productsaga from "./ProductSagas";
import testimonialsaga from "./TestimonialSagas";
import cartsaga from "./CartSagas";
import wishlistsaga from "./WishlistSagas";
import checkoutsaga from "./CheckoutSagas";
import newslettersaga from "./NewsletterSagas";
import contactUssaga from "./ContactUsSagas";

export default function* RootSaga() {
    yield all([
        maincategorysaga(),
        subcategorysaga(),
        brandsaga(),
        productsaga(),
        testimonialsaga(),
        cartsaga(),
        wishlistsaga(),
        checkoutsaga(),
        newslettersaga(),
        contactUssaga()
    ])
}