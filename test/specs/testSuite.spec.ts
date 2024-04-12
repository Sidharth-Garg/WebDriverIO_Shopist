import { Cart } from "../pageobjects/cartPage";
import { Homepage } from "../pageobjects/homePage";
import { Itempage } from "../pageobjects/itemsPage";
import { Profile } from "../pageobjects/myProfilePage";
describe("Shop.ist Test Suite",()=>{
    let homepage: Homepage;
    let itempage: Itempage;
    let cartpage: Cart
    let profile: Profile;
    beforeEach(() => {
        browser.url("https://shopist.io/");
        browser.maximizeWindow();
        homepage=new Homepage();
        itempage= new Itempage();
        cartpage = new Cart();
        profile = new Profile();
    });

    it("Checking Header Links", async()=>{
       homepage.clickHeaderLink("CHAIRS");
       await homepage.isHeaderLinkOpen("chairs")
       browser.back();
       homepage.clickHeaderLink("SOFAS");
       await homepage.isHeaderLinkOpen("sofas");
       browser.back();
       homepage.clickHeaderLink("BEDDING");
       await homepage.isHeaderLinkOpen("bedding");
       browser.back();
       homepage.clickHeaderLink("LIGHTING");
       await homepage.isHeaderLinkOpen("lighting");
       browser.back();
       homepage.clickHeaderLink("MY PROFILE");
       await homepage.isHeaderLinkOpen("profile");
       browser.back();
       homepage.clickHeaderLink("CART");
       await homepage.isHeaderLinkOpen("cart");
       browser.back();
    })
    it("Add Elements To Cart", async()=>{
        homepage.clickHeaderLink("SOFAS");
        await browser.pause(2000);
        await homepage.isHeaderLinkOpen("sofas");
        await itempage.clickProduct("Ivory Covertible Sofa");
        await itempage.assertClickedProduct("Ivory Covertible Sofa");
        await browser.pause(2000);
        await itempage.clickAddToCartButton();
        homepage.clickHeaderLink("CART");
        await homepage.isHeaderLinkOpen("cart");
        expect(await cartpage.isProductAddedToCart("Ivory Covertible Sofa")).toBeTruthy();
        await browser.pause(2000);
    })
    it("Try to add sold out item ", async()=>{
        homepage.clickHeaderLink("SOFAS");
        await homepage.isHeaderLinkOpen("sofas");
        await itempage.clickProduct("Tall Tufted Couch");
        await itempage.isErrorMsgDisplayed();
        await browser.pause(2000);        
    })
    it("Add element and checkout", async()=>{
        homepage.clickHeaderLink("SOFAS");
        await homepage.isHeaderLinkOpen("sofas");
        await itempage.clickProduct("Ivory Covertible Sofa")
        await itempage.clickAddToCartButton();
        homepage.clickHeaderLink("CART");
        await homepage.isHeaderLinkOpen("cart");
        await cartpage.clickCheckoutButton();
        await browser.pause(2000);
    })
    it("Edit Profile-> Save Profile -> View Updated Profile", async()=>{
        homepage.clickHeaderLink("MY PROFILE");
        await homepage.isHeaderLinkOpen("profile");
        await browser.pause(2000);
        profile.clickEditProfileButton();
        await browser.pause(2000);
        await profile.enterFirstName("Sidharth");
        await profile.enterLastName("Garg");
        await profile.enterAddress("Address1", "Address2");
        await profile.enterCityName("Pune");
        await profile.selectState("MH");
        await profile.enterMobileNum("9876543219");
        await profile.enterZipCode("411012");
        await browser.pause(2000);
        await profile.clicksaveButton();
        await browser.pause(2000);
        await profile.clickViewUpdatedProfileButton();
        await browser.pause(2000);
    })
})