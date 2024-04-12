export class Cart{
    get addedProductDesc(){
        return $$('[class="product-description"] div ')
    }
    get checkoutButton(){
        return $('.checkout')
    }
    async isProductAddedToCart(name: string): Promise<boolean>{
        let status: boolean = false;
        const productDesc = await this.addedProductDesc;
        console.log( "<<<<<<<<<<<<<<<<<<<<<<<<<<<",await productDesc[0].getText() )
        for(let i=0; i<productDesc.length;i+=11){
            if((await productDesc[i].getText()).includes(name)){
                status= true;
                break;
            }
        }
        return status;
    }
    async clickCheckoutButton(){
        await this.checkoutButton.click();
    }
}