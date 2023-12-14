import React, { useState, useRef, useEffect } from "react"
import { Box } from "@mui/material"
import { REQ_ACCOUNT_GET_HOME } from "../../managers/AccounHomeManager"
import { AccountCardItem } from "./AccountCardItem"

const AccountCards: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [accountHomeData] = REQ_ACCOUNT_GET_HOME.useRequest()

	const accounts: IAccount[] | undefined = accountHomeData?.account?.accounts
	const cardRefs = useRef<Array<HTMLDivElement | null>>([])
	const currencyAccountsTotalAmount =
		accounts?.reduce((acc, card) => acc + parseInt(card?.CONSOLIDATE_BALANCE), 0) ?? 0

	if (!accounts) return null

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
						const index = cardRefs.current.findIndex((ref) => ref === entry.target)
						if (index !== -1) setCurrentSlide(index)
					}
				})
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.5
			}
		)

		cardRefs.current.forEach((cardRef) => {
			if (cardRef) {
				observer.observe(cardRef)
			}
		})

		return () => {
			observer.disconnect()
		}
	}, [accounts])

	useEffect(() => {
		if (cardRefs.current[currentSlide]) {
			cardRefs.current[currentSlide]?.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "center"
			})
		}
	}, [currentSlide])

	const handleIndicatorClick = (index: number) => setCurrentSlide(index)

	return (
		<Box display='flex' flexDirection='column' position='relative'>
			<Box
				sx={{
					"::-webkit-scrollbar": {
						display: "none"
					}
				}}
				overflow='scroll'
				gap={4}
				display='flex'
				alignItems='center'
				p={2}
			>
				{accounts?.map((card, index) => (
					<div key={index} ref={(el) => (cardRefs.current[index] = el)}>
						<AccountCardItem
							card={card}
							totalAccountQty={currencyAccountsTotalAmount} // todo
							active={currentSlide === index}
						/>
					</div>
				))}
			</Box>
			<Box display='flex' justifyContent='center' mt={1} mb={1}>
				{accounts?.map((_, index) => (
					<Box
						key={index}
						onClick={() => handleIndicatorClick(index)}
						sx={{
							width: 8,
							height: 8,
							borderRadius: "50%",
							backgroundColor: currentSlide === index ? "activeDot.main" : "gray",
							marginX: 0.5,
							cursor: "pointer"
						}}
					/>
				))}
			</Box>
		</Box>
	)
}

export default AccountCards
