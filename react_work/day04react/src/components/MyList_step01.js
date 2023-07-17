function MyList({listTitle,listData}) {
    // console.dir(props);
    // return(
    //     <>
    //         <h2>{props.listTitle}</h2>
    //         <p>{props.listData}</p>
    //     </>
    // );

    // const {listTitle, listData} = props;

    return(
        <>
            <h2>{listTitle}</h2>
            <p>{listData}</p>
        </>
    )
}

export default MyList;