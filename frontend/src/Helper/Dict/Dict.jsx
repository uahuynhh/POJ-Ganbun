import react from 'react'
import {useState, useEffect, useReducer} from 'react'
import axios from 'axios'
import {Card} from '../Card/Card.jsx'


const URI = window.location.protocol + "//" + window.location.host + "/api/v1/dict"
const chhoeURI = window.location.protocol + "//" + window.location.host + "/api/v1/chhoe"
const ITEM = 20

function HandleResult(props) {
	const PAGE = ITEM * (props.page?.page - 1)
	let innerPage = props.result
	if (props.result?.length >= 20) {
		if (PAGE+20 >= props.result?.length) {
			innerPage = props.result.slice(PAGE, props.result.length - 1)
		} else {
			innerPage = props.result.slice(PAGE, PAGE+20)
		}
	}
	return innerPage.map((item) => {
		const HOA = item.hoabun ?? item.english 
		const HANLO = item.hanlo_taibun_poj ?? item.hanlo_taibun ?? item.hanji_taibun
		const KAISOEH = item.hanlo_taibun_kaisoeh_poj ?? item.descriptions_poj
		const GANBUN = item.ganbun
		const URL = item.url
		return <Card key={`${item.poj_input}${item.id}`} ganbunMode={props.ganbun} GANBUN={GANBUN} URL={item.url} POJ={item.poj_unicode} KAISOEH={KAISOEH} HANLO={HANLO} HOA={HOA} />

	})
}


function PageCountController(props) {
	const [page, setPage] = useState(props.current?.page)
	const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
    	props.pageDispatch({type: 'jump', page: page})
    }
  }

	useEffect(() => {
		setPage(props.current?.page)
	},[props.current?.page])
	if (props.maxpage > 0) {
		return (
			<div className="flex justify-center m-4">
				<button className="m-4 p-2 dark:bg-gray-800 dark:text-white bg-white text-black rounded focus:ring-4 focus:ring-white-500 focus:ring-opacity-50" onClick={() => props.pageDispatch({type: 'previous'})}>{props.ganbun? '딩₂' : 'téng'}</button>
				<div className="m-4">
					<input className="dark:hover:bg-gray-800 dark:hover:text-white inline-block bg-transparent hover:text-black transition hover:bg-white w-9 text-right" value={page} onChange={e => {
						setPage(e.target?.value)
					}} onBlur={() => {
						props.pageDispatch({type: 'jump', page: page})
					}} onKeyDown={handleKeyDown}/>
					<span className="inline-block w-9">/{props.maxpage}</span>
				</div>
				<button className="dark:bg-gray-800 dark:text-white m-4 p-2 bg-white text-black rounded focus:ring-4 focus:ring-white-500 focus:ring-opacity-50" onClick={() => props.pageDispatch({type: 'next'})}>{props.ganbun? '알₇' : 'āu'}</button>
			</div>
		)
	} else {
		return (<div></div>)
	}
}




export function Dict(props) {
	const [key, setKey] = useState(props.keyword)
	const [result, setResult] = useState([{id:1, poj_input:"Gan-bun", poj_unicode:"Gān-bûn", ganbun:"간゙₇분゙₅", descriptions_poj:`一種用간゙₇분゙₅來寫台語에₅書寫方式，詳細書寫規則請參考`, url:"https://drive.google.com/drive/folders/1Pov4YMnAdZ9t_cq8QO_Ji7jAyP0ENK9Q", hoabun: "諺文"}])
	const [maxPage, setMaxPage] = useState(0)
	const [ganbun, setGanbun] = useState(true)
	const [page, pageDispatch] = useReducer((state, action) => {
		switch(action.type) {
			case 'previous':
				if (state.page - 1 > 0) {
					return {page: state.page - 1}
				} else {
					return {page: state.page}
				}
				break;
			case 'next':
				if (state.page +1 <= maxPage) {
					return {page: state.page + 1}
				} else {
					return {page: state.page}
				}
				break;
			case 'jump':
				try{
					const setPage = parseInt(action.page)
					if (setPage === 0 || setPage === undefined || setPage > maxPage) {
						console.log("page error.")
						return {page: state.page} 
					} else if (setPage <= maxPage) {
						return {page: setPage} 
					}
				} catch{
					console.log("page error.")
					return {page: action.page} 
				}
				
			case 'clear':
				return {page: 1}
		}
	}, {page: 1})
	useEffect(() => {
		setKey(props.keyword)
	}, [props.keyword])
	useEffect(() => {
		props.setIsLoading(false)
	}, [result])
	return (
		<div className="m-4">

			<PageCountController ganbun={ganbun} pageDispatch={pageDispatch} maxpage={maxPage} current={page}/>
			
			<button className="m-4 p-4 dark:bg-yellow-800 bg-yellow-500 focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 rounded" onClick={() => {
				setGanbun(!ganbun)
			}}>{ganbun ? '챧₄와゚₇POJ' : 'chhiat-ōaⁿ gān-bûn'}</button>

			<button className="m-4 p-4 dark:bg-yellow-800 bg-yellow-500 focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 rounded" onClick={async () => {
				props.setIsLoading(true)
				
				const newURI = URI + (`?keyword=${key}`)
				const res = await axios.get(newURI)
				let withKai = []
				let withoutKai = []
				res?.data?.forEach((item) => {
					const KAISOEH = item.hanlo_taibun_kaisoeh_poj ?? item.descriptions_poj
					if (KAISOEH === undefined) {
						withoutKai = [...withoutKai, item]
					} else {
						withKai = [...withKai, item]
					}
				})
				setResult([...withKai, ...withoutKai])
				setMaxPage(Math.ceil([...withKai, ...withoutKai].length / ITEM))
				pageDispatch({type: 'clear'})
			}}>{ganbun ? '차₅리₇댠₂' : 'Chhâ lī-tián'}</button>
			<ul className="flex flex-wrap">
				<HandleResult ganbun={ganbun} page={page} result={result} />

			</ul>
			<PageCountController ganbun={ganbun} className="hidden md:block" pageDispatch={pageDispatch} maxpage={maxPage} current={page}/>
			
		</div>
	)
}
