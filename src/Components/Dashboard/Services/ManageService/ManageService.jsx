import React from 'react';
import ManageServiceCard from './ManageServiceCard/ManageServiceCard';
import useCommonApiData from '../../../../Hooks/useCommonApiData/useCommonApiData';

const ManageService = () => {
    const { serviceData, serviceLoaded, serviceRefetch } = useCommonApiData()



    return (
        <section>
            <div className="grid md:grid-cols-3 gap-4 justify-center items-center">
                {serviceData &&
                    serviceData.length &&
                    serviceData.map((service) => {
                        return <ManageServiceCard key={service._id} service={service} 
                            serviceRefetch={serviceRefetch}
                        />;
                    })}
            </div>
        </section>
    );
};

export default ManageService;