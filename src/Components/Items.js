const Items = ( {id, img, h1, p} ) => {
    return (
        <section id={id} className="lg:mx-24 flex flex-col items-center justify-center rounded-2xl shadow mb-10 lg:flex-row-reverse">
            <img className="my-6 mx-10 lg:w-1/3" src={img} alt={h1} />
            <div>
                <h1 className="mx-14 mb-4 lg:text-left lg:ml-28">{h1}</h1>
                <p className="text-center mx-10 mb-8 lg:text-left lg:ml-28">{p}</p>
            </div>
        </section>
    )
}

export default Items