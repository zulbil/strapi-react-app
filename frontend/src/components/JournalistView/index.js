import './style.scss';
import { useState,useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import SearchInput from '../SearchInput';
import JournalistList from '../JournalistList';

const JournalistView = () => {

    const [isLoading, setIsLoading]                 =       useState(false)
    const [journalists, setJournalists]             =       useState([])
    const [error, setError]                         =       useState(null)
    const [searchKeyWord, setSearchKeyWord]         =       useState('')

    const performSearch = (search) => {
        if(!search) return; 
        setIsLoading(true)
        setSearchKeyWord(search);

        const params = {
            _where: {
                _or: [
                    { lastname_contains: search },
                    { firstname_contains: search },
                    { description_contains: search },
                    { address_contains: search },
                    { roles_contains: search },
                    { 'agency.name_contains': search },
                    { 'topics.name_contains' : search }
                ]
            }
        };

        const queryString = qs.stringify(params, {encode: false });

        axios.get('http://localhost:1337/journalists?'+queryString)
         .then((response) => {
            setJournalists(response.data)
         })
         .catch((err) => {
            setError(err)
            console.log(err);
         })
         .finally(() =>{
             setTimeout(() => {
                setIsLoading(false)
             }, 1000);
         });
    }

    const getJournalists = () => {
        setIsLoading(true)
        axios.get('http://localhost:1337/journalists')
         .then((response) => {
            setJournalists(response.data)
         })
         .catch((err) => {
            setError(err)
         })
         .finally(() => {
             setTimeout(() => {
                setIsLoading(false)
             }, 1000);
         });
    }

    useEffect(() => {
        getJournalists()
    }, [])


    return (
        <section className="journalist-view-section">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-6 col-auto">
                    <h2 className="text-center mb-4">The most powerful journalist database on the internet</h2>
                    <p className="mb-5">You can try using Hunt Press for free below. Premium data is redacted until you subscribe.</p>    
                    <SearchInput onSearch={performSearch} />
                    {
                        error &&
                        <div className="alert alert-danger">
                            {error.response.data.message ? error.response.data.message : 'Une erreur inattendue s\'est produite'}
                        </div>
                    }

                    {
                        ( isLoading && !error ) && 
                        <SkeletonTheme>
                            <div>
                                <Skeleton count={4} duration={10} height={330} delay={10}className='mt-4' />
                            </div>
                        </SkeletonTheme>
                    }

                    {
                        (!isLoading && !error ) &&
                        <JournalistList list={journalists} />
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JournalistView