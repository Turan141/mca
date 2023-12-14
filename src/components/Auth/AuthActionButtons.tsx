import { Box, Button } from "@mui/material"
import {
	AUTH_DATA_ACTIVE_STEP,
	AUTH_DATA_CHANGE_STEP,
	AUTH_DATA_PROCESS_BACK_ACTION,
	AUTH_DATA_PROCESS_NEXT_ACTION
} from "../../managers/AuthManager"
import { useEffect, useState } from "preact/hooks"
import { Back } from "../../assets/icons/Back"

interface IAuthActionButtonsProps {
	isDisabled?: boolean
}

export const AuthBackButton = () => {
	const [currStep, setCurrStep] = useState(0)
	const handleAuthBackBtn = async () => AUTH_DATA_PROCESS_BACK_ACTION.invoke()

	useEffect(() => {
		AUTH_DATA_ACTIVE_STEP.subscribe((packet) => {
			setCurrStep(packet.currentStep)
		}, "AuthBackButton")

		return () => {
			AUTH_DATA_CHANGE_STEP.unsubscribe("AuthBackButton")
		}
	}, [])

	return (
		<Box
			onClick={handleAuthBackBtn}
			sx={{ width: "30px", height: "30px", marginLeft: 1 }}
		>
			{currStep > 0 && <Back />}
		</Box>
	)
}

export const AuthNextButton: React.FC<IAuthActionButtonsProps> = ({ isDisabled }) => {
	// const [isLoading, setIsLoading] = useState(false)
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const handleInputFocus = () => {
    setIsKeyboardOpen(true);
  };

  const handleInputBlur = () => {
    setIsKeyboardOpen(false);
  };

  useEffect(() => {
    // Attach focus and blur event listeners to input fields
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.addEventListener('focus', handleInputFocus);
      input.addEventListener('blur', handleInputBlur);
    });

    return () => {
      // Clean up listeners when component unmounts
      inputs.forEach((input) => {
        input.removeEventListener('focus', handleInputFocus);
        input.removeEventListener('blur', handleInputBlur);
      });
    };
  }, []);

	const handleAuthNextBtn = async () => {
		// setIsLoading(true)
		await AUTH_DATA_PROCESS_NEXT_ACTION.request()
		// setIsLoading(false)
	}

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
        position: 'fixed',
        width: '100%',
        transition: 'bottom 0.3s ease',
        bottom: isKeyboardOpen ? '40vh' : '20vh',
			}}
			mt={2}
		>
			<Button
				variant='contained'
				sx={{
					display: "flex",
					justifyContent: "center",
					textTransform: "none",
					backgroundColor: "activeDot.main",
					borderRadius: "25px",
					width: "200px",
					height: "46px",
					fontSize: "16px",
					mt: 8,
					opacity: isDisabled ? 1 : 1, // Adjust opacity when disabled
					pointerEvents: isDisabled ? "none" : "auto" // Disable pointer events when disabled
				}}
				onClick={handleAuthNextBtn}
				disabled={isDisabled}
			>
				Next
			</Button>
		</Box>
	)
}
