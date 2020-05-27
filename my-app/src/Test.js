import React from 'react';

const denominations = [1, 5, 10, 20, 50, 100, 200];

class Test extends React.Component{

    comparaisonNombres = (a, b) => {
        return b - a;
    }

    // trieTab = () => {
    //    // let tabTrie = denominations.sort(this.comparaisonNombres);
    //     let last = null;

    //     denominations.forEach((item, index) => {

    //         if (last !== null) {
    //             denominations.sort(this.comparaisonNombres(last,item));
    //         }
    //         last = item;
    //         // console.log(item) //value
    //         // console.log(index) //index
    //       })
    // }

    calcul = (number)=>{
        let result = [];
        let nb = null;

        denominations.sort(this.comparaisonNombres);

        // console.log('denominations trie->',denominations);

        while(number > 0){

            denominations.forEach((item, key) => {

                console.log('the item->',item);
                console.log('the key->',key);
                

                if ( number >= item) {
                    nb = Math.floor(number / item);
                    number = number % item;

                    result.push({item : nb});
                }

            })
        }

        console.log('result->',result);
        // return result.map((elm, i) => elm);
        return 1
    }

    render(){
        return(
            <div>
                <h1>Test</h1>
                {this.calcul(233)}
            </div>
        );
    }

}

export default Test;