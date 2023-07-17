function MyList({fruits}) {

    const fruitsList = fruits.map((fruits,i) =>{
        return <li key={i}>{fruits}</li>
    });

    return(
        <div>
            <ul>{fruitsList}</ul>
        </div>
    )
}

export default MyList;