function Picture() {
    return (
        <div className="picbox">

            <img className='pics' src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="profile" />
            
        </div>
    )
}
function NamesEmail(){
    return(
        <div className='namebox'>

        <h1>Julienne Moore</h1>
        <h4>Julienne.Moore@company.com</h4>
        </div>
    )
}



function Info(num1, num2, num3) {
    return (
        <div className='info'>
            <div className='c1'>
                <h3>25</h3>
                <p>Posts</p>
            </div>
            <div className='c1'>
                <h3>350</h3>
                <p>Following</p>

            </div>
            <div className='c1'>
                <h3>1.5K</h3>
                <p>Followers</p>

            </div>
        </div>
    )
}






function App() {

    return (
        <div className='Main'>

            <Picture />
            <NamesEmail/>
            <Info/>
            

        </div>

    )

}





ReactDOM.createRoot(document.querySelector('.root'))
    .render(<App />)
// .render(<App/>)