const Dual_column_content = (props) =>{
    const data = props.layoutdata;
    return(
        <section class="container-fluid pt90 pb90">
            <div class="container">
                <div class="row">


                    {data.column && data.column.map((item,index)=>{
                        return (<div key={index} class="col-md-6" dangerouslySetInnerHTML={{ __html: item.content}}></div>)
                    })
                    }
                           
                </div>
            </div>
        </section>
    )
}

export default Dual_column_content;