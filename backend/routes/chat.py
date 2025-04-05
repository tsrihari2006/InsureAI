# chat.py
import re

# 🔸 Responses dictionary (you can expand this to 100+ entries)
responses = {
    "health insurance": "We offer several health insurance plans based on age, income, and medical history. Want more info?",
    "life insurance": "Our life insurance options are designed to support your family's future. Want to see available plans?",
    "vehicle insurance": "Yes, we cover two-wheelers, four-wheelers, and commercial vehicles. Do you want third-party or full coverage?",
    "policies": "We have policies for health, life, and vehicle insurance. Which are you interested in?",
    "policy": "Please specify which policy—health, life, or vehicle—you want to learn more about.",
    "types of insurance": "We support health, life, and vehicle insurance categories. How can I assist you today?",
    "coverage": "Coverage depends on your policy type. Do you want to know coverage for health, life, or vehicle?",
    "documents": "For accurate predictions, we need details like age, vehicle type, health history, and income.",
    "age requirement": "Minimum age varies by policy. For life insurance, it starts at 18. Need more age-based details?",
    "income proof": "Income is required for premium predictions. We accept salary slips or IT returns.",
    "premium": "Premiums are calculated based on personal or vehicle details. Would you like a sample calculation?",
    "monthly premium": "Health insurance starts at $50/month. Want to customize it?",
    "yearly premium": "Life insurance annual premiums are more economical. Want a breakdown?",
    "compare policies": "Yes! You can compare health vs. life or vehicle coverage benefits. Which comparison do you want?",
    "low cost plans": "We offer budget-friendly plans. Want to see those under $100/month?",
    "tax benefit": "Health and life insurance offer tax benefits under Section 80C. Want tax-saving tips?",
    "nominee": "You can nominate anyone for life insurance. Need help assigning one?",
    "sum assured": "It’s the amount paid to the nominee. For life policies, it ranges from $10,000 to $1M. Want estimates?",
    "claim process": "Claims can be filed online or via our agents. Need guidance on how?",
    "claim status": "You can check claim status via the dashboard. Want the steps?",
    "third party insurance": "Third-party covers liability for others. Do you want this for your vehicle?",
    "comprehensive insurance": "This covers your vehicle plus third-party. Want to see the benefits?",
    "accident cover": "Accident cover is included in both vehicle and health plans. Want to know the limits?",
    "emergency hospital": "Emergency hospitalization is covered in our health policy. Want to know nearby hospitals?",
    "pre existing condition": "We cover pre-existing diseases after a waiting period. Want more info?",
    "waiting period": "Typically 2-4 years for pre-existing illnesses. Would you like a detailed policy document?",
    "cashless hospital": "Yes, we have tie-ups with 5000+ hospitals. Want to check one near you?",
    "hospital list": "We can help you locate cashless hospitals. Share your city name.",
    "renewal": "Policies can be renewed online. Need help with renewal reminders?",
    "grace period": "You get 15-30 days to renew after expiry. Want to enable reminders?",
    "late payment": "Late payments may lead to lapse. We recommend auto-renew. Want to enable?",
    "vehicle age": "Vehicles older than 10 years may have higher premiums. Need help calculating?",
    "registration number": "We need your vehicle registration to get a prediction. Ready to share?",
    "engine type": "Petrol, diesel, or electric affects premiums. What’s your engine type?",
    "claim bonus": "We offer No Claim Bonus (NCB) on vehicle insurance. Want to know how much?",
    "IDV": "Insured Declared Value is important for vehicles. Want help calculating IDV?",
    "policy number": "Please provide your policy number to fetch details.",
    "existing insurance": "Already have insurance? We can still help with prediction. Want to continue?",
    "transfer policy": "Vehicle insurance can be transferred. Want to know the process?",
    "change nominee": "Nominees can be changed anytime. Need help updating?",
    "port policy": "You can port your health insurance. Want to explore better plans?",
    "disability cover": "Life insurance includes accidental disability. Want to enable this add-on?",
    "critical illness": "We cover cancer, heart attack, etc. under critical illness. Want to add this?",
    "maternity cover": "We offer maternity benefits after 1-year waiting. Want to know more?",
    "covid": "Our health plans include COVID coverage. Need a policy with it?",
    "free checkup": "Some plans offer annual checkups. Want to explore those?",
    "cancer cover": "Yes, we have cancer-specific plans. Need a quote?",
    "term plan": "Term insurance gives high coverage at low cost. Want to see plans?",
    "return of premium": "Some life plans return full premium. Want to calculate benefits?",
    "rider": "You can add riders like disability or maternity. Want help adding?",
    "download policy": "You can download your e-policy from your dashboard. Want a guide?",
    "track application": "We’ll need your reference number. Want to proceed?",
    "renew vehicle": "Your vehicle policy is due? I can help you renew it.",
    "medical history": "Medical records help in predicting premium. Want to upload yours?",
    "lifestyle": "We consider smoking and alcohol in life policy predictions. Want to update lifestyle details?",
    "BMI": "Body Mass Index is important in health predictions. Do you know yours?",
    "family cover": "Family floater plans are available. Want to include spouse/children?",
    "group insurance": "Group plans for companies are available. Want to inquire?",
    "travel insurance": "We don't support travel insurance yet. Want health or life cover?",
    "student insurance": "Student health plans available for abroad. Want more details?",
    "deductible": "Deductibles lower premiums. Want to add one?",
    "co pay": "You can co-pay 20-30% to reduce costs. Want to enable?",
    "cashback": "Some plans offer cashback after 3 years. Want to see options?",
    "reimbursement": "Submit hospital bills for reimbursement. Want steps?",
    "ambulance": "Ambulance charges are covered up to $500. Need details?",
    "health checkup": "Free health checkups yearly. Want to schedule?",
    "digital card": "Get an e-insurance card post purchase. Want help downloading?",
    "policy start": "Your policy starts 1 day after payment. Need confirmation?",
    "age limit": "Maximum age for life plans is 65. Want senior citizen options?",
    "children cover": "You can cover children above 91 days. Want to include?",
    "tax proof": "Your insurance receipt acts as tax proof. Want a copy?",
    "add spouse": "You can add your spouse to health/life plan. Want to continue?",
    "agent contact": "Our agent will call you shortly. Want to book a call?",
    "helpline": "You can reach us at 1800-INSURE. Need other contact options?",
    "cancel policy": "You can cancel within 15 days. Want cancellation terms?",
    "free look": "You get 15 days to review policy. Not satisfied? Cancel free!",
    "vehicle change": "You can shift your policy to a new vehicle. Want help?",
    "engine number": "Required for vehicle prediction. Can you provide it?",
    "chassis number": "We need it for older vehicles. Want to locate it?",
    "insurance fraud": "We verify all data to avoid fraud. Want verification tips?",
    "fake insurance": "Be aware of scams. Always verify with us. Need a checklist?",
    "installments": "We offer monthly or yearly installments. What’s your preference?",
    "claim rejection": "Claims may be rejected for incomplete documents. Want prevention tips?",
    "top up plan": "Top-up plans increase health cover. Want to explore?",
    "OPD": "Outpatient expenses are also covered. Want to include it?",
    "network garage": "Vehicle policies have cashless garages. Want the list?",
    "bike insurance": "Yes, two-wheeler policies are available. Want third-party?",
    "car insurance": "We offer car insurance with NCB. Want to apply?",
    "surrender": "Surrender value depends on the policy term. Want a calculation?",
    "loan against policy": "Life plans with cash value offer loans. Want to explore?",
    "support": "Our support team is here 24/7. Do you need help with anything?",
    "thank": "You're welcome! Let us know if you have more questions.",
    "thanks": "Glad to help! You can ask me anything about insurance.",
    "hello": "Hello! How can I assist you with insurance today?",
    "hi": "Hi there! What would you like to know about insurance?"
}


# 🔸 Chatbot logic
def get_bot_response(user_message):
    user_message = user_message.lower()

    # Match longest keys first
    sorted_keys = sorted(responses, key=lambda x: len(x), reverse=True)

    for key in sorted_keys:
        if re.search(rf"\b{re.escape(key)}\b", user_message):
            return responses[key]

    for key in sorted_keys:
        if key in user_message:
            return responses[key]

    return "I'm not sure about that. Can you rephrase your question?"
