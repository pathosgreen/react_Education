function MyList({fruits,setTitle,setFruits}) {

    const fruitsList = fruits.map((fruits,i) =>{
        return <li key={i}>{fruits}</li>
    });

    return(
        <div>
            <button onClick={function(e){
                setTitle("Sol");
                setFruits([...fruits,"포도"])
            }}>확인</button>
            <ul>{fruitsList}</ul>
        </div>
    )
}

export default MyList;