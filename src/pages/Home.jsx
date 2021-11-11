import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, {SectionTitle, SectionBody} from '../components/Section'
import ProductCard from '../components/ProductCard'

import heroSiderData from '../assets/fake-data/hero-slider'
import PolicyCart from '../components/PolicyCart'
import policy from '../assets/fake-data/policy'
import Grid from '../components/Grid'
import productData from '../assets/fake-data/products'

import video from '../assets/images/lisa.mp4'



const Home = () => {
    return (
        <Helmet title="Home">
            {/* hero slider */}
            <HeroSlider 
                data={heroSiderData} 
                control={true}
                auto={true}
                timeOut={5000}
            />
            {/* end hero slider */}

            {/* policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdcol={2}
                        smcol={1}
                        gap={20}
                    >

                        {
                            policy.map((item, index) => <Link key={index} to="/policy">
                                <PolicyCart                                    
                                    name={item.name}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end policy section */}

            {/* best selling section */}
                <Section>
                    <SectionTitle>
                        Top selling products of the week 
                    </SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdcol={2}
                            smcol={1}
                            gap={20}
                        >
                            {
                                productData.getProducts(4).map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        img01={item.image01}
                                        img02={item.image02}
                                        name={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}
                                    />
                                ))
                            }
                        </Grid>
                    </SectionBody>
                </Section>             
            {/* end best selling section */}

            {/* video */}
            <Section>
                    <SectionBody>
                        <video src={video} autoPlay loop></video>
                    </SectionBody>
                </Section>
            {/* end video */}

            {/* new arrival section */}
            <Section>
                    <SectionTitle>
                        News
                    </SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdcol={2}
                            smcol={1}
                            gap={20}
                        >
                            {
                                productData.getProducts(8).map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        img01={item.image01}
                                        img02={item.image02}
                                        name={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}
                                    />
                                ))
                            }
                        </Grid>
                    </SectionBody>
                </Section>  
            {/* end new arrival section */}

            

        </Helmet>
    )
}

export default Home
