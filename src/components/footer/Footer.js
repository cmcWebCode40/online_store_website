import React from 'react'

const Footer = () => {
  return (
    <footer className="footer pt-1">
      <div className="footer-grid">
        <div className="footer-subscribe my-1">
          <form>
            <input type="text" placeholder="enter your email address" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className="footer-nav my-1">
          <ul> 
            <li> <a href="wecsjkcskjdc.com">COLLECTIONS</a></li>
            <li> <a href="wecsjkcskjdc.com">SERVICES</a></li>
            <li> <a href="wecsjkcskjdc.com">CONTACT</a></li>
            <li> <a href="wecsjkcskjdc.com">CART</a></li>
          </ul>
        </div>
      </div>
      <cite>LA MORE COLLECTION &copy; 2020</cite>
      <p>built with coffee by cmcWebCode</p>
    </footer>
  )
}

export default Footer
