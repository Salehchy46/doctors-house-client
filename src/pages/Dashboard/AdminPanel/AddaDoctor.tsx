import React from 'react';

const AddaDoctor: React.FC = () => {
    return (
        <div className='text-black'>
            <h2 className='text-2xl font-bold mb-10'>Add a New Doctor</h2>
            <fieldset className="fieldset rounded-box w-xs border p-4">

                <label className="label">Title</label>
                <input type="text" className="input bg-white border-2 border-black" placeholder="My awesome page" />

                <label className="label">Slug</label>
                <input type="text" className="input bg-white border-2 border-black" placeholder="my-awesome-page" />

                <label className="label">Author</label>
                <input type="text" className="input bg-white border-2 border-black" placeholder="Name" />
                <input type="image" accessKey='' />
                <input type="submit" className='btn w-full bg-teal-950' value="Add" />
            </fieldset>
        </div>
    );
};

export default AddaDoctor;