import { useState, ChangeEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Breadcrumb from '../../../components/Breadcrumb';
import { Layanan } from '../../../models/layanan.model';

const FormCreateLayanan = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<Layanan>({
    nama_layanan: '',
    biaya_layanan: 0,
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue.nama_layanan) {
      return setError('Nama layanan is required.');
    } else if (!inputValue.biaya_layanan) {
      return setError('Biaya layanan is required.');
    } else if (inputValue.biaya_layanan < 0) {
      return setError('Biaya layanan must be a positive number.');
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/layanan/create',
        inputValue
      );

      if (response.status === 201) {
        setError(null);
        setInputValue({
          nama_layanan: '',
          biaya_layanan: 0,
        });
        return navigate('/admin/layanan-management');
      } else {
        setError('An error occurred while creating the layanan.');
      }
    } catch (error) {
      setError('An error occurred while creating the layanan.');
    }
  };

  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Form Create Layanan" />

        <div className="flex justify-center items-center">
          <div className="w-1/2 2xsm:w-3/4 justify-self-center justify-center justify-items-center content-center items-center self-center rounded-sm border border-stroke bg-white shadow-card dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Form Create Layanan
              </h3>
            </div>
            <form
              id="form-upload"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="p-6">
                <div className="mb-5">
                  <div className="w-full">
                    <label
                      className="mb-2.5 block text-black dark:text-white"
                      htmlFor="name"
                    >
                      Nama Layanan
                    </label>
                    <input
                      type="text"
                      id="nama_layanan"
                      name="nama_layanan"
                      value={inputValue.nama_layanan}
                      onChange={handleInput}
                      placeholder="Name"
                      className="w-full text-black-5 rounded border-2 border-stroke bg-whiten py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-black-4 dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      required
                    />
                    {error && <p className="text-danger">{error}</p>}
                  </div>
                </div>

                <div className="mb-5">
                  <div className="w-full">
                    <label
                      className="mb-2.5 block text-black dark:text-white"
                      htmlFor="name"
                    >
                      Biaya Layanan
                    </label>
                    <input
                      type="number"
                      id="biaya_layanan"
                      name="biaya_layanan"
                      value={inputValue.biaya_layanan}
                      onChange={handleInput}
                      placeholder="Biaya"
                      className="w-full text-black-5 rounded border-2 border-stroke bg-whiten py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-black-4 dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      required
                    ></input>
                    {error && <p className="text-danger">{error}</p>}
                  </div>
                </div>

                <div className="flex gap-4">
                  <NavLink
                    to="/admin/layanan-management"
                    className="flex w-1/2 justify-center rounded text-danger border transition hover:text-white hover:bg-danger focus:outline-none dark:focus:outline-none dark:hover:bg-danger p-3 font-medium"
                  >
                    Cancel
                  </NavLink>
                  <button
                    type="submit"
                    className="flex w-1/2 justify-center rounded bg-primary p-3 font-medium text-white transition hover:bg-dark-blue"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormCreateLayanan;
