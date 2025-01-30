const MovieContainer = ({children}) => {
  return (
    <div className='grid gap-12 p-8 xl:grid-cols-[repeat(4,minmax(300px,1fr))] lg:grid-cols-[repeat(2,minmax(500px,1fr))]  md:grid-cols-[repeat(2,minmax(500px,1fr))] sm:grid-cols-[repeat(1,minmax(500px,1fr))]'>
      {children}
    </div>
  )
}

export default MovieContainer