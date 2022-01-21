import { useQuery } from "@apollo/react-hooks";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';
import Countdown from "react-countdown";

import ALink from '~/components/features/alink';
import OwlCarousel from '~/components/features/owl-carousel';
import SpecialCollection from '~/components/partials/home/special-collection';
import TopCollection from '~/components/partials/home/top-collection';
import BlogCollection from '~/components/partials/home/blog-collection';
import NewsletterModal from "~/components/features/modals/newsletter-modal";
import { rendererThree } from "~/components/features/count-down";

import withApollo from '~/server/apollo';
import { GET_HOME_DATA } from '~/server/queries';
import { attrFilter } from '~/utils';

import { homeData, introSlider, brandSlider, fadeInUpShorter, fadeInLeftShorter, fadeInRightShorter, fadeIn } from '~/utils/data';

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA );
    const products = data && data.homeData.products;
    const topProducts = attrFilter( data && data.homeData.products, 'top' );
    const posts = data && data.homeData.posts;

    if ( error ) {
        return <div></div>
    }

    return (
        <div className="main home-page skeleton-body">
            <div className="intro-slider-container">
                <OwlCarousel adClass="owl-simple owl-light owl-nav-inside" options={ introSlider }>
                    <div className="intro-slide slide1" style={ { backgroundColor: '#EDF2F0', backgroundImage: 'url(images/home/sliders/slide-1-1.png)' } }>
                        <div className="container intro-content">
                            <Reveal keyframes={ fadeInUpShorter } delay="100%" duration={ 1000 }>
                                <>
                                    <h3 className="intro-subtitle">Deals and Promotions</h3>
                                    <h1 className="intro-title">Wooden <br />Sideboard Table <br /><span className="text-primary"><sup>$</sup>49,99</span></h1>

                                    <ALink href="/shop/sidebar/list" className="btn btn-dark btn-outline-darker">
                                        <span>Shop Now</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </ALink>
                                </>
                            </Reveal>
                            <img src="images/home/sliders/slide-1-3.png" className="position-absolute" alt="slide" />
                        </div>
                    </div>
                    <div className="intro-slide" style={ { backgroundImage: 'url(images/home/sliders/slide-2.jpg)' } }>
                        <div className="container intro-content text-right">
                            <Reveal keyframes={ fadeInUpShorter } delay="100%" duration={ 1000 }>
                                <div className="d-inline-block text-left">
                                    <h3 className="intro-subtitle">Bedroom Furniture</h3>
                                    <h1 className="intro-title">Find Comfort <br />That Suits You.</h1>

                                    <ALink href="/shop/sidebar/list" className="btn btn-dark btn-outline-darker">
                                        <span>Shop Now</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </ALink>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    <div className="intro-slide slide3" style={ { backgroundColor: '#EDF2F0', backgroundImage: 'url(images/home/sliders/slide-3-1.png)' } }>
                        <div className="container intro-content">
                            <Reveal keyframes={ fadeInUpShorter } delay="100%" duration={ 1000 }>
                                <>
                                    <h3 className="intro-subtitle">Baskets & Storage</h3>
                                    <h1 className="intro-title">
                                        Laundary Basket<br />
                                        <span className="text-primary">
                                            <sup className="text-grey font-weight-light">from</sup><sup>$</sup>9,99
                                    </span>
                                    </h1>

                                    <ALink href="/shop/sidebar/list" className="btn btn-dark btn-outline-darker">
                                        <span>Shop Now</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </ALink>
                                </>
                            </Reveal>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
            <Reveal keyframes={ fadeIn } delay="100%" duration={ 500 } triggerOnce>
                <OwlCarousel adClass="brands-border owl-simple brand-carousel cols-xl-7 cols-lg-5 cols-md-4 cols-sm-3 cols-2" options={ brandSlider }>
                    {
                        homeData.brands.map( ( brand, index ) => {
                            return (
                                <ALink href="#" className="brand mr-0" key={ index } >
                                    <img src={ brand.image } alt="brand" width={ brand.width } height={ brand.height } />
                                </ALink>
                            )
                        } )
                    }
                </OwlCarousel>
            </Reveal>

            <div className="mb-3 mb-lg-5"></div>

            <div className="banner-group">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-5">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                                <div className="banner banner-large banner-overlay banner-overlay-light banner-lg banner-1 lazy-media">
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-1.jpg"
                                        threshold={ 200 }
                                        width="100%"
                                        height="auto"
                                        effect="blur"
                                    />

                                    <div className="banner-content banner-content-top">
                                        <h4 className="banner-subtitle">Clearence</h4>
                                        <h3 className="banner-title">Coffee Tables</h3>
                                        <div className="banner-text">from $19.99</div>
                                        <ALink href="/shop/sidebar/list" className="btn btn-outline-gray banner-link">Shop Now<i className="icon-long-arrow-right"></i></ALink>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <Reveal keyframes={ fadeIn } delay={ 150 } duration={ 1000 } triggerOnce>
                                <div className="banner banner-overlay banner-lg banner-2 lazy-media">
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-2.jpg"
                                        threshold={ 200 }
                                        height="auto"
                                        width="100%"
                                        effect="blur"
                                    />

                                    <div className="banner-content banner-content-top">
                                        <h4 className="banner-subtitle text-grey">On Sale</h4>
                                        <h3 className="banner-title text-white">Kitchenware</h3>
                                        <div className="banner-text text-white">from $39.99</div>
                                        <ALink href="/shop/sidebar/list" className="btn btn-outline-white banner-link">Discover Now<i className="icon-long-arrow-right"></i></ALink>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 150 } duration={ 1000 } triggerOnce>
                                <div className="row">
                                    <div className="col-lg-12 col-md-6 col-sm-6">
                                        <div className="banner banner-3 banner-overlay lazy-media">
                                            <div className="lazy-overlay"></div>

                                            <LazyLoadImage
                                                alt="banner"
                                                src="images/home/banners/banner-3.jpg"
                                                threshold={ 200 }
                                                height="auto"
                                                width="100%"
                                                effect="blur"
                                            />

                                            <div className="banner-content banner-content-top">
                                                <h4 className="banner-subtitle">New Arrivals</h4>
                                                <h3 className="banner-title">Home Decor</h3>
                                                <ALink href="/shop/sidebar/list" className="btn btn-outline-gray banner-link">Discover Now<i className="icon-long-arrow-right"></i></ALink>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 col-sm-6">
                                        <div className="banner banner-4 banner-overlay banner-overlay-light lazy-media">
                                            <div className="lazy-overlay"></div>

                                            <LazyLoadImage
                                                alt="banner"
                                                src="images/home/banners/banner-4.jpg"
                                                threshold={ 200 }
                                                width="100%"
                                                height="auto"
                                                effect="blur"
                                            />

                                            <div className="banner-content banner-content-top">
                                                <h4 className="banner-subtitle">On Sale</h4>
                                                <h3 className="banner-title">Collection Chairs</h3>
                                                <div className="banner-text">up to 30% off</div>
                                                <ALink href="/shop/sidebar/list" className="btn btn-outline-gray banner-link">Shop Now<i className="icon-long-arrow-right"></i></ALink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3"></div>

            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <SpecialCollection products={ products } loading={ loading } />
            </Reveal>
            <div className="bg-light deal-container pt-5 pb-3 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="deal">
                                <div className="deal-content">
                                    <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                        <>
                                            <h4>Limited Quantities</h4>
                                            <h2>Deal of the Day</h2>

                                            <h3 className="product-title">
                                                <ALink href="#">POÄNG</ALink>
                                            </h3>

                                            <div className="product-price">
                                                <span className="new-price">$149.00</span>
                                                <span className="old-price">Was $240.00</span>
                                            </div>

                                            <div className="deal-countdown">
                                                <Countdown date={ `2022-02-01T01:02:03` } renderer={ rendererThree } />
                                            </div>

                                            <ALink href="/shop/sidebar/list" className="btn btn-primary">
                                                <span>Shop Now</span><i className="icon-long-arrow-right"></i>
                                            </ALink>
                                        </>
                                    </Reveal>
                                </div>

                                <div className="deal-image position-relative">
                                    <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                                        <ALink href="/shop/sidebar/list">
                                            <div className="lazy-overlay bg-white"></div>

                                            <LazyLoadImage
                                                alt="deal-banner"
                                                src="images/home/deal/deal-1.png"
                                                threshold="300"
                                                effect="blur"
                                                width="100%"
                                                height={ 460 }
                                            />
                                        </ALink>
                                    </Reveal>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="banner banner-overlay banner-overlay-light d-none d-lg-block h-100 pb-2">
                                <ALink href="#" className="h-100">
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="deal-banner"
                                        src="images/home/banners/banner-5.jpg"
                                        threshold="300"
                                        effect="blur"
                                        className="h-100"
                                        width="100%"
                                    />
                                </ALink>

                                <div className="banner-content banner-content-top">
                                    <h4 className="banner-subtitle text-white">The Best Choice</h4>
                                    <h3 className="banner-title text-white">Indigo <br />Best Linen</h3>
                                    <div className="banner-text text-primary">$49.99</div>
                                    <ALink href="/shop/sidebar/3cols" className="btn btn-outline-light banner-link">Shop Now<i className="icon-long-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-6"></div>
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <TopCollection products={ topProducts } loading={ loading } />
            </Reveal>
            <BlogCollection posts={ posts } loading={ loading }></BlogCollection>
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <div className="icon-boxes-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-rocket"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Free Shipping</h3>

                                        <p>orders $50 or more</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-rotate-left"></i>
                                    </span>

                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Free Returns</h3>

                                        <p>within 30 days</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-info-circle"></i>
                                    </span>

                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Get 20% Off 1 Item</h3>

                                        <p>When you sign up</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="icon-box icon-box-side">
                                    <span className="icon-box-icon text-dark">
                                        <i className="icon-life-ring"></i>
                                    </span>

                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">We Support</h3>

                                        <p>24/7 amazing services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <div
                    className="footer-newsletter bg-image"
                    style={ { backgroundImage: 'url(images/backgrounds/bg-2.jpg)' } }
                >
                    <div className="container">
                        <div className="heading text-center">
                            <h3 className="title">Get The Latest Deals</h3>

                            <p className="title-desc">
                                and receive&nbsp;
                            <span>$20 coupon</span> for first shopping
                        </p>
                        </div>

                        <div className="row">
                            <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                <form action="#">
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your Email Address"
                                            aria-label="Email Adress"
                                            aria-describedby="newsletter-btn"
                                            required
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                                id="newsletter-btn"
                                            >
                                                <span>Subscribe</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
            <NewsletterModal />
        </div>
    )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( Home );