const Items = ( {img, h1, p} ) => {
    return (
        <section className="mx-5 flex flex-col items-center justify-center rounded-2xl shadow mb-10">
            <img className="my-6 mx-10" src={img} alt={h1} />
            <h1 className="mx-14 mb-4">{h1}</h1>
            <p className="text-center mx-10 mb-8">{p}</p>
        </section>
    )
}

export default Items