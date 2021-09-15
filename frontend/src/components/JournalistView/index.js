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
        setIsLoading(true)
        setSearchKeyWord(search);
    }

    const buildsearchQuery = () => {
        if(searchKeyWord) {
            const params = {
                _where: {
                    _or: [
                        { lastname_contains: searchKeyWord },
                        { firstname_contains: searchKeyWord },
                        { description_contains: searchKeyWord },
                        { address_contains: searchKeyWord },
                        { roles_contains: searchKeyWord },
                        { 'agency.name_contains': searchKeyWord },
                        { 'topics.name_contains' : searchKeyWord }
                    ]
                }
            };
            
            return qs.stringify(params, {encode: false });
        }
        return ''
    }

    const getJournalists = () => {
        setIsLoading(true)
        const url = 'http://localhost:1337/journalists'
        const apiUrl = (buildsearchQuery()) ? url+'?'+buildsearchQuery() : url
        axios.get(apiUrl)
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
    }, [searchKeyWord])


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
