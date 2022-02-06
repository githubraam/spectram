const Footer = () => {
    return (
        <footer class="footer bg-primary">
            <div class="container-fluid bgNoRepeat bgCover">
                <div class="container pt90">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="mb-5">
                                <h1 className="text-center">Logo</h1>
                                {/* <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/footer-logo.png" class="img-fluid" alt="" loading="lazy" > */}
                            </div>
                            <a target="_blank" href="http://www.facebook.com/pages/Spectra-Film-and-Video/491877490840574" class="d-inline-block">
                                {/* <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/facebook.jpg" alt="" loading="lazy" /> */}
                            </a>
                        </div>
                        <div class="col-md-4">
                            <div class="widgetWrpr">
                                <h4 class="widgetTitle">Contact Us</h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span class="icon">
                                                {/* <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/map-icon.png" alt="" class="img-fluid"> */}
                                            </span>
                                            <span>5626 Vineland Ave North Hollywood, CA 91601</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="icon">
                                                {/* <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/call-icon.png" alt="" class="img-fluid"> */}
                                            </span>
                                            <span>818-762-4545</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="icon">
                                               {/*  <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/faxicon.png" alt="" class="img-fluid"> */}
                                            </span>
                                            <span>818-762-5454</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="icon">
                                                {/* <img src="<?php echo site_url(); ?>/wp-content/uploads/2021/12/mail-icon.png" alt="" class="img-fluid"> */}
                                            </span>
                                            <span>sales@spectrafilmandvideo.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            {/* <?php dynamic_sidebar('footer-sitemap'); ?> */}
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid copyRightCont py-4">
                <div class="container ">
                    <div class="text-center text-white weight300">© 2021 Spectra Film and Video. All Rights Reserved.  <a href="#">Web Design</a></div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;