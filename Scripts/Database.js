const database = {
    guest: [{
        id: 1,
        name: "Hell Singer",
        areaId: 1,

    }, {
        id: 2,
        name: "Hadi",
        areaId: 1,

    }, {
        id: 3,
        name: "Kaheel",
        areaId: 1,

    }, {
        id: 4,
        name: "HAM",
        areaId: 1,

    }, {
        id: 5,
        name: "Arise",
        areaId: 1,

    }, {
        id: 6,
        name: "Ryu",
        areaId: 1,

    }, {
        id: 7,
        name: "James Ivy",
        areaId: 1,

    }, {
        id: 8,
        name: "Jamie",
        areaId: 1,

    }, {
        id: 9,
        name: "Sol",
        areaId: 1,

    }, {
        id: 10,
        name: "Porter",
        areaId: 1,

    }],
    area: [{
        id: 1,
        name: "Lost wolf Hiking",
        image: "Imgs/leonid.jpg"
    }, {
        id: 2,
        name: "Lodge",
        image: "Imgs/wellspring_glades.jpg"
    }, {
        id: 3,
        name: "GanderRiver",
        image: "Imgs/Luma.jpg"
    }, {
        id: 4,
        name: "Chamfort River",
        image: "Imgs/Inkwater_marsh.jpg"
    }, {
        id: 5,
        name: "Campgrounds",
        image: "Imgs/Midnight_Burrows.jpg"
    }, {
        id: 6,
        name: "Pine Bluffs Trails",
        image: "Imgs/Woods.jpg"
    }],
    service: [{
        id: 1,
        name: "Rafting",
    }, {
        id: 2,
        name: "Canoeing",
    }, {
        id: 3,
        name: "Fishing",
    }, {
        id: 4,
        name: "Hiking",
    }, {
        id: 5,
        name: "Picnicking",
    }, {
        id: 6,
        name: "Rockclimbing",
    }, {
        id: 7,
        name: "Hotel",
    }, {
        id: 8,
        name: "Resturant",
    }, {
        id: 10,
        name: "Lodging",
    }, {
        id: 11,
        name: "Parking",
    }, {
        id: 12,
        name: "Childrens play area",
    }, {
        id: 13,
        name: "Information",
    }, {
        id: 14,
        name: "Office park"
    }, {
        id: 15,
        name: "Food vendor"
    }, {
        id: 16,
        name: "Zipline"
    }],
    serviceInArea: [
        { id: 1, areaId: 4, serviceId: 1 },
        { id: 2, areaId: 4, serviceId: 2 },
        { id: 3, areaId: 4, serviceId: 3 },
        { id: 4, areaId: 1, serviceId: 4 },
        { id: 5, areaId: 1, serviceId: 5 },
        { id: 6, areaId: 1, serviceId: 6 },
        { id: 7, areaId: 2, serviceId: 10 },
        { id: 8, areaId: 2, serviceId: 11 },
        { id: 10, areaId: 2, serviceId: 13 },
        { id: 11, areaId: 2, serviceId: 8 },
        { id: 12, areaId: 2, serviceId: 7 },
        { id: 13, areaId: 2, serviceId: 5 },
        { id: 14, areaId: 3, serviceId: 3 },
        { id: 15, areaId: 3, serviceId: 4 },
        { id: 16, areaId: 5, serviceId: 14 },
        { id: 17, areaId: 5, serviceId: 12 },
        { id: 18, areaId: 5, serviceId: 13 },
        { id: 19, areaId: 5, serviceId: 10 },
        { id: 20, areaId: 5, serviceId: 11 },


    ]
}

export const getGuest = () => {
    return database.guest.map(guest => ({...guest}))
}

export const getArea = () => {
    return database.area.map(area => ({...area}))
}

export const getService = () => {
    return database.service.map(service => ({...service}))
}

export const getAreaService = () => {
    return database.serviceInArea.map(areaService => ({...areaService}))
}