const getTime = (question) => {
    
    const dataEndString = question["dataEnd"];
    const dataStartString = question["dataStart"];

    const dateEnd = new Date(dataEndString);
    const dataStart = new Date(dataStartString);

    return dateEnd-dataStart;
}

export default getTime;