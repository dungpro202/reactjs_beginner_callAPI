
var initialState = [
    {
        id:1,
        name:"Iphone 6 Plus",
        peice: 400,
        status: true
    },
    {
        id:2,
        name:"Sam Sung S7",
        peice: 700,
        status: false
    },
    {
        id:3,
        name:"Realme X7",
        peice: 600,
        status: true
    },
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state]
    }
}

export default products;