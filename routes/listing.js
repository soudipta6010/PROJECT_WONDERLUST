const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


router.route("/")
    .get(wrapAsync(listingController.index)) //Index Route
    // .post(isLoggedIn, validateListing, wrapAsync(listingController.createListing)); //Create Route
    .post(upload.single('listing[image][url]'), (req, res) => {
        res.send(req.file);
    });

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);


router.route("/:id")
    .get(wrapAsync(listingController.showListing)) //Show Route
    .put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing)) //Update Route
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destryListing)); //Delete Route



//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));


module.exports = router;
