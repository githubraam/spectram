const Footer = () => {
    return (
        <footer className="footer bg-primary">
            <div className="container-fluid bgNoRepeat bgCover">
                <div className="container pt90">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-5">
                                <h1 className="text-center">Logo</h1>
                                {/* <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/footer-logo.png" className="img-fluid" alt="" loading="lazy" > */}
                            </div>
                            <a target="_blank" href="http://www.facebook.com/pages/Spectra-Film-and-Video/491877490840574" className="d-inline-block">
                                {/* <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/facebook.jpg" alt="" loading="lazy" /> */}
                            </a>
                        </div>
                        <div className="col-md-4">
                            <div className="widgetWrpr">
                                <h4 className="widgetTitle">Contact Us</h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span className="icon">
                                                {/* <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/map-icon.png" alt="" className="img-fluid"> */}
                                            </span>
                                            <span>5626 Vineland Ave North Hollywood, CA 91601</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon">
                                                {/* <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/call-icon.png" alt="" className="img-fluid"> */}
                                            </span>
                                            <span>818-762-4545</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon">
                                               {/*  <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/faxicon.png" alt="" className="img-fluid"> */}
                                            </span>
                                            <span>818-762-5454</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon">
                                                {/* <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/mail-icon.png" alt="" className="img-fluid"> */}
                                            </span>
                                            <span>sales@spectrafilmandvideo.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            {/* <?php dynamic_sidebar('footer-sitemap'); ?> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid copyRightCont py-4">
                <div className="container ">
                    <div className="text-center text-white weight300">© 2021 Spectra Film and Video. All Rights Reserved.  <a href="#">Web Design</a></div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;