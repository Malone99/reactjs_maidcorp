import React, {useEffect, useState} from "react";
import {AiFillEdit} from 'react-icons/ai';
const MaidList = ({list}) => {


    return (<div className="flex flex-col">

        <div className="overflow-auto sm:-xm-6 lg:px-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                            <th itemScope="col" className="px-6 py-4">
                                ID</th>
                            <th itemScope="col" className="px-6 py-4">
                                First Name</th>
                            <th itemScope="col" className="px-6 py-4">
                                Last Name</th>
                            <th itemScope="col" className="px-6 py-4">
                                Address</th>
                        </tr>
                    </thead>
                    <tbody> {
                        list.map((item) => (<tr key={
                            item.id
                        }>
                            <td className="whitespace-nowrap px-6 py-4 font-medium"> {
                                item.id
                            }</td>
                            <td className="whitespace-nowrap px-6 py-4 font-"> {
                                item.firstName
                            }</td>
                            <td className="whitespace-nowrap px-6 py-4 font-"> {
                                item.lastName
                            }</td>
                            <td className="whitespace-nowrap px-6 py-4 font-"> {
                                item.address.street
                            }</td>
                            <td>
                                <button><AiFillEdit size={20}
                                        className="hover:bg-blue-600"/></button>
                            </td>
                        </tr>))
                    } </tbody>
                </table>
            </div>
        </div>
    </div>)

}

export default MaidList;
