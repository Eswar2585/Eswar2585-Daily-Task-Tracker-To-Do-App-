const Header = ({text,bgcolor,textcolor}) => {
   const headerStyle={backgroundColor:bgcolor,
      color:textcolor
    }
  return (
  <header style={headerStyle}>
      <div className=".container">
         <h2>{text}</h2>
         </div>
       
    </header>
  )
}

export default Header
