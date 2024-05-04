import jwt from 'jsonwebtoken';

export const verifyUser=async(req,res,next)=>{
    const token = req.params.token;
    console.log(token)
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRETE_KEY);
        if (!decoded) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        console.log("user id",decoded.id)
        req.userId = decoded.id; // Attach userId to request object
        next();
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
}