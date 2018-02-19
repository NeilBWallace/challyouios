var api = {
    getClubs(){
        return fetch('https://lit-falls-96282.herokuapp.com/clubs').then((res) => res.json());
    }
};

module.exports =api;