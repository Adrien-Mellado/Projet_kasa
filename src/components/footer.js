import React from 'react';
import '../styles/footer.css'
import LOGO from '../assets/LOGO.png'

function footer () {
    return <div className='footer'>
        <footer>
            <div className="Bloc_footer">
            <div>
            <img src={LOGO} alt='LOGO' className='LOGO'/>
            </div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
</div>


}
export default footer